import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    general: {
      displayName: "John Doe",
      username: "johndoe",
      email: "johndoe@example.com",
    },
    account: {
      password: "********",
      language: "English",
      country: "United States",
    },
    notifications: {
      email: true,
      push: false,
    },
  });

  const handleChange = (category, key, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [category]: {
        ...prevSettings[category],
        [key]: value,
      },
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md text-white">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* General Settings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">General</h2>
          <div className="flex items-center space-x-24 y-4">
            <SettingRow
              label="Display Name"
              value={settings.general.displayName}
              onChange={(value) =>
                handleChange("general", "displayName", value)
              }
            />
            <SettingRow
              label="Username"
              value={settings.general.username}
              onChange={(value) => handleChange("general", "username", value)}
            />
            <SettingRow
              label="Email"
              value={settings.general.email}
              onChange={(value) => handleChange("general", "email", value)}
            />
          </div>
        </div>

        {/* Account Settings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Account</h2>
          <div className="flex flex-col space-y-4">
            <SettingRow
              label="Password"
              value="********"
              onChange={(value) => handleChange("account", "password", value)}
              isPassword
            />
            <SettingRow
              label="Language"
              value={settings.account.language}
              onChange={(value) => handleChange("account", "language", value)}
            />
            <SettingRow
              label="Country"
              value={settings.account.country}
              onChange={(value) => handleChange("account", "country", value)}
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Notifications</h2>
          <div className="flex flex-col space-y-4">
            <SettingToggle
              label="Email Notifications"
              value={settings.notifications.email}
              onChange={(value) =>
                handleChange("notifications", "email", value)
              }
            />
            <SettingToggle
              label="Push Notifications"
              value={settings.notifications.push}
              onChange={(value) => handleChange("notifications", "push", value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingRow = ({ label, value, onChange, isPassword = false }) => {
  return (
    <div className="flex items-center mb-4">
      <label className="w-1/4 pr-4">{label}</label>
      {isPassword ? (
        <input
          type="password"
          className="border p-2 w-3/4 rounded-md text-black"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type="text"
          className="border p-2 w-3/4 rounded-md text-black"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

const SettingToggle = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <label className="w-3/4">{label}</label>
      <input
        type="checkbox"
        className="ml-auto"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
};

export default Settings;
