import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const supabaseUrl = "https://ckrouquzysjhsifkonju.supabase.co";
const supabaseKey = "sb_publishable_XJclR4NF_jzmcIN65WhD7g_KF5CbUpn";
const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
const EMAILJS_CONFIG = {
  serviceId: "service_5qmv1rc",
  templateId: "template_i8s3cn8",
  publicKey: "gMFReCyoec25LY4TC",
  adminEmail: "printzonemlg@gmail.com"
};
export {
  EMAILJS_CONFIG as E,
  supabase as s
};
