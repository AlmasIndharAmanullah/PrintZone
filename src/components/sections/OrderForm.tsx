import { supabase } from "@/lib/supabase";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  service: z.string().min(1, "Please select a service"),
  quantity: z.coerce.number().int().min(1, "Min 1").max(10000),
  notes: z.string().max(1000).optional(),
});

const services = [
  "Report & Thesis Printing", "Photo Printing", "Diploma & Certificate Printing",
  "Banner & Poster Printing", "Business Cards", "Invitations",
  "Photocopy Services", "Scanning", "Laminating", "Binding",
];

export function OrderForm() {
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      service: fd.get("service"),
      quantity: fd.get("quantity"),
      notes: fd.get("notes"),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid form");
      return;
    }
    if (file && file.size > 10 * 1024 * 1024) {
      toast.error("File must be smaller than 10MB");
      return;
    }
    setSubmitting(true);
    try {
  let fileUrl = "";

  if (file) {
    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("order-files")
      .upload(fileName, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicData } = supabase.storage
      .from("order-files")
      .getPublicUrl(fileName);

    fileUrl = publicData.publicUrl;
  }

  const { error: dbError } = await supabase
    .from("orders")
    .insert([
      {
        full_name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        service_type: parsed.data.service,
        quantity: parsed.data.quantity,
        notes: parsed.data.notes || "",
        file_url: fileUrl,
        status: "pending",
      },
    ]);

  if (dbError) {
    throw dbError;
  }

  const fileInfo = file
    ? `${file.name} (${(file.size / 1024).toFixed(1)} KB)`
    : "No file attached";

  const params = {
    customer_name: parsed.data.name,
    customer_email: parsed.data.email,
    customer_phone: parsed.data.phone,
    service_type: parsed.data.service,
    quantity: parsed.data.quantity,
    notes: parsed.data.notes || "—",
    file_info: fileInfo,
    to_email: EMAILJS_CONFIG.adminEmail,
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    params,
    { publicKey: EMAILJS_CONFIG.publicKey }
  );

  toast.success("Order berhasil dikirim!");

  formRef.current?.reset();
  setFile(null);

} catch (err) {
  console.error(err);
  alert(JSON.stringify(err));
  toast.error("Gagal mengirim order.");
}}

  return (
    <section id="order" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">Place an Order</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Ready to print?</h2>
          <p className="mt-4 text-muted-foreground">Fill the form and we'll get started right away.</p>
        </div>
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto p-8 md:p-10 rounded-3xl glass shadow-elegant space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="Kvaratskhelia" required maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="kvaratskhelia@gmail.com" required maxLength={255} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+62 819 123 4567" required maxLength={30} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Input id="quantity" name="quantity" type="number" min={1} defaultValue={1} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="service">Service Type *</Label>
              <Select name="service" required>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="file">Upload File (PDF, DOCX, JPG, PNG)</Label>
              <label
                htmlFor="file"
                className="flex items-center gap-3 px-4 py-6 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary hover:bg-primary/5 transition"
              >
                <Upload className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {file ? file.name : "Click to upload (max 10MB)"}
                </span>
                <input
                  id="file"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" name="notes" placeholder="Paper type, finishing, deadline..." rows={4} maxLength={1000} />
            </div>
          </div>
          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="w-full bg-primary-gradient text-primary-foreground shadow-glow hover:opacity-90"
          >
            {submitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
            ) : (
              <><Send className="mr-2 h-4 w-4" /> Submit Order</>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}