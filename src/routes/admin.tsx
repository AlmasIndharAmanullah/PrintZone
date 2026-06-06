import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);

  const loadOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setOrders(data || []);
    }
  };

const updateStatus = async (id: number, status: string) => {
  console.log("UPDATE STATUS:", id, status);

  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", id)
    .select();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert("Gagal update status");
    return;
  }

  if (status === "ready_to_print") {
    const order = orders.find((o) => o.id === id);

    if (order?.email) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          "template_7zpl4ni",
          {
            customer_name: order.full_name,
            customer_email: order.email,
            service_type: order.service_type,
            to_email: order.email,
          },
          {
            publicKey: EMAILJS_CONFIG.publicKey,
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
  }

  await loadOrders();
};

  useEffect(() => {
    loadOrders();
  }, []);

return (

  <div className="p-8">
    <h1 className="text-3xl font-bold mb-6">
      PrintZone Admin Dashboard
    </h1>
<button
  onClick={loadOrders}
  className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
>
  Refresh Data
</button>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
  <div className="bg-white shadow rounded-xl p-4 border">
    <h3 className="text-gray-500 text-sm">Total Orders</h3>
    <p className="text-3xl font-bold">{orders.length}</p>
  </div>

  <div className="bg-yellow-50 shadow rounded-xl p-4 border">
    <h3 className="text-yellow-700 text-sm">Processing</h3>
    <p className="text-3xl font-bold text-yellow-600">
      {orders.filter((o) => o.status === "processing").length}
    </p>
  </div>

  <div className="bg-green-50 shadow rounded-xl p-4 border">
    <h3 className="text-green-700 text-sm">Ready</h3>
    <p className="text-3xl font-bold text-green-600">
      {orders.filter((o) => o.status === "ready_to_print").length}
    </p>
  </div>

  <div className="bg-blue-50 shadow rounded-xl p-4 border">
    <h3 className="text-blue-700 text-sm">Done</h3>
    <p className="text-3xl font-bold text-blue-600">
      {orders.filter((o) => o.status === "done").length}
    </p>
  </div>
</div>

<div className="overflow-auto">
  <table className="w-full border">
    <thead>
      <tr>
        <th className="border p-2">Nama</th>
        <th className="border p-2">Layanan</th>
        <th className="border p-2">Qty</th>
        <th className="border p-2">File</th>
        <th className="border p-2">Status</th>
        <th className="border p-2">Aksi</th>
      </tr>
    </thead>

    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>
          <td className="border p-2">{order.full_name}</td>

          <td className="border p-2">{order.service_type}</td>

          <td className="border p-2">{order.quantity}</td>

          <td className="border p-2">
            <a
              href={order.file_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              Lihat File
            </a>
          </td>

          <td className="border p-2">
            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                order.status === "processing"
                  ? "bg-yellow-500"
                  : order.status === "ready_to_print"
                  ? "bg-green-500"
                  : order.status === "done"
                  ? "bg-blue-500"
                  : "bg-gray-500"
              }`}
            >
              {order.status}
            </span>
          </td>

          <td className="border p-2 flex gap-2">
            <button
              className="px-2 py-1 bg-yellow-500 rounded"
              onClick={() =>
                updateStatus(order.id, "processing")
              }
            >
              Processing
            </button>

            <button
              className="px-2 py-1 bg-green-500 rounded"
              onClick={() =>
                updateStatus(order.id, "ready_to_print")
              }
            >
              Ready
            </button>

            <button
              className="px-2 py-1 bg-blue-500 rounded"
              onClick={() =>
                updateStatus(order.id, "done")
              }
            >
              Done
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  </div>
);
}