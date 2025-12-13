import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const API_BASE = "https://api.efficidex.com/v1";

const endpoints = [
    { label: "Run Workflow", value: "workflows/xyz/run", method: "POST" },
    { label: "Get Workflow Status", value: "workflows/xyz", method: "GET" },
    { label: "List Workflows", value: "workflows", method: "GET" },
    { label: "Send Webhook Test", value: "webhooks/test", method: "POST" },
];

export function ApiConsole() {
    const [apiKey, setApiKey] = useState("");
    const [endpoint, setEndpoint] = useState(endpoints[0].value);
    const [method, setMethod] = useState(endpoints[0].method);
    const [body, setBody] = useState(`{\n  "input": {}\n}`);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    async function runRequest() {
        setLoading(true);
        setResponse("");

        try {
            const res = await fetch(`${API_BASE}/${endpoint}`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: method === "GET" ? undefined : body,
            });

            const text = await res.text();
            setResponse(text);
        } catch (err: any) {
            setResponse(`Error: ${err.message}`);
        }

        setLoading(false);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-border rounded-xl p-6 bg-card"
        >
            <h3 className="text-xl font-semibold mb-4">Interactive API Console</h3>

            {/* API Key */}
            <label className="text-sm font-medium">API Key</label>
            <Input
                type="password"
                placeholder="YOUR_API_KEY"
                className="mb-4"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
            />

            {/* Endpoint Selector */}
            <label className="text-sm font-medium">Endpoint</label>
            <select
                className="w-full border border-border rounded-md p-2 bg-background text-sm mb-4"
                value={endpoint}
                onChange={(e) => {
                    const ep = endpoints.find((x) => x.value === e.target.value);
                    setEndpoint(e.target.value);
                    setMethod(ep?.method || "POST");
                }}
            >
                {endpoints.map((ep) => (
                    <option key={ep.value} value={ep.value}>
                        {ep.method} — {ep.label}
                    </option>
                ))}
            </select>

            {/* Request Body */}
            {method !== "GET" && (
                <>
                    <label className="text-sm font-medium">JSON Body</label>
                    <Textarea
                        className="h-40 font-mono text-sm mb-4"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </>
            )}

            {/* Run Request */}
            <Button onClick={runRequest} disabled={loading} className="w-full">
                {loading ? "Running..." : "Run Request"}
            </Button>

            {/* Response */}
            <div className="mt-6">
                <label className="text-sm font-medium mb-2">Response</label>
                <pre className="p-4 bg-black text-white rounded-lg text-sm overflow-auto h-64">
                    {response || "// Response will appear here"}
                </pre>
            </div>
        </motion.div>
    );
}
