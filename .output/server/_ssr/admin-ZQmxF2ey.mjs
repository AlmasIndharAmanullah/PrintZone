import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase, E as EMAILJS_CONFIG } from "./emailjs-config-BlfErbkh.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";

import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/unenv.mjs";


import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
function AdminPage() {
  const [orders, setOrders] = reactExports.useState([]);
  const loadOrders = async () => {
    const {
      data,
      error
    } = await supabase.from("orders").select("*").order("created_at", {
      ascending: false
    });
    if (!error) {
      setOrders(data || []);
    }
  };
  const updateStatus = async (id, status) => {
    console.log("UPDATE STATUS:", id, status);
    const {
      data,
      error
    } = await supabase.from("orders").update({
      status
    }).eq("id", id).select();
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
          await emailjs.send(EMAILJS_CONFIG.serviceId, "template_7zpl4ni", {
            customer_name: order.full_name,
            customer_email: order.email,
            service_type: order.service_type,
            to_email: order.email
          }, {
            publicKey: EMAILJS_CONFIG.publicKey
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
    await loadOrders();
  };
  reactExports.useEffect(() => {
    loadOrders();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-6", children: "PrintZone Admin Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: loadOrders, className: "mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg", children: "Refresh Data" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow rounded-xl p-4 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-gray-500 text-sm", children: "Total Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold", children: orders.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 shadow rounded-xl p-4 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-yellow-700 text-sm", children: "Processing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-yellow-600", children: orders.filter((o) => o.status === "processing").length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 shadow rounded-xl p-4 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-green-700 text-sm", children: "Ready" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-green-600", children: orders.filter((o) => o.status === "ready_to_print").length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 shadow rounded-xl p-4 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-blue-700 text-sm", children: "Done" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-blue-600", children: orders.filter((o) => o.status === "done").length })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-2", children: "Nama" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-2", children: "Layanan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-2", children: "Qty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-2", children: "File" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-2", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border p-2", children: "Aksi" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-2", children: order.full_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-2", children: order.service_type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-2", children: order.quantity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: order.file_url, target: "_blank", rel: "noreferrer", className: "text-blue-500", children: "Lihat File" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1 rounded-full text-white text-sm ${order.status === "processing" ? "bg-yellow-500" : order.status === "ready_to_print" ? "bg-green-500" : order.status === "done" ? "bg-blue-500" : "bg-gray-500"}`, children: order.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border p-2 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-2 py-1 bg-yellow-500 rounded", onClick: () => updateStatus(order.id, "processing"), children: "Processing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-2 py-1 bg-green-500 rounded", onClick: () => updateStatus(order.id, "ready_to_print"), children: "Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-2 py-1 bg-blue-500 rounded", onClick: () => updateStatus(order.id, "done"), children: "Done" })
        ] })
      ] }, order.id)) })
    ] }) })
  ] });
}
export {
  AdminPage as component
};
