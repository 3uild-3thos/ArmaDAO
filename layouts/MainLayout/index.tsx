"use client";
import React from "react";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
function MainLayout({ children }: any) {
  const router = useRouter();
  return (
    <main>
      <div className="z-10">
        <div className={style.navbar}></div>
        <div className={style.sidenav}>
          <p className="text-gray-100" onClick={() => router.push("/create")}>
            Create
          </p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.sidenav_divider}></div>
        <div className={style.content_container}>
          <div className={style.navbar_divider}></div>
          <div className={style.content}>{children}</div>
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
