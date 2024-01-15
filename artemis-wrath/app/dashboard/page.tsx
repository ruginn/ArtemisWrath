"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useUserInfo } from "@/hooks/use-userInfo";

const Dashboard = () => {
  const { user } = useUser();
  const userInfo = useUserInfo();

  // const userLogin = async () => {
  //     const userData = {
  //         id: user?.id,
  //         firstName: user?.firstName,
  //         lastName: user?.lastName,
  //     }
  //     const res = await fetch('api/auth', {
  //         method: 'POST',
  //         body: JSON.stringify(userData),
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         cache: 'no-cache'
  //     })
  //     const finRes = await res.json()
  //     userInfo.UpdateAll(finRes)
  // }

  // useEffect(() => {
  //     if (user) {
  //         userLogin()
  //     }
  // },[user])

  return (
    <div className="w-[calc(100vw-16rem)] flex flex-col items-center">
      <h1 className="text-7xl">Welcome {userInfo?.name.split(" ")[0]}!</h1>
    </div>
  );
};

export default Dashboard;
