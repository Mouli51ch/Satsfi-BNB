"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { useAccount } from "wagmi";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { address, isConnected } = useAccount();
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center pt-32 pb-12">
        <div className="glass-card neon-border max-w-lg w-full p-8 md:p-12 mx-auto card-hover-effect">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-subtle text-center">Settings</h1>
          <p className="text-gray-400 mb-8 text-center">
            Manage your preferences, theme, and account settings.
          </p>

          {/* Theme Toggle */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-white">Theme</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Light</span>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                className="mode-switch"
              />
              <span className="text-gray-300">Dark</span>
            </div>
          </div>

          {/* Wallet Info */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-white">Wallet</h2>
            <div className="bg-gray-900/60 rounded-lg p-4 flex flex-col gap-2">
              <span className="text-gray-300">Connected Wallet:</span>
              <span className="text-green-400 font-mono">
                {isConnected && address ? address : "Not connected"}
              </span>
            </div>
          </div>

          {/* Notification Preferences */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">Notifications</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Enable Email Alerts</span>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                className="accent-[#B4FF3C]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 