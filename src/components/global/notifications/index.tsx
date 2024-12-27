import { Button } from "@/components/ui/button";
import { Bell } from "@/icons";
import React from "react";

const Notifications = () => {
  return (
    <Button className="bg-white rounded-full py-6">
      <Bell color="#3352CC" fill="#3352CC" />
    </Button>
  );
};

export default Notifications;
