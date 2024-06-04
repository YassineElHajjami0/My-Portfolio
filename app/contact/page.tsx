"use client";
import React, { useEffect, useRef } from "react";
import { sendingEmail } from "./sendingEmail";
import { useGenerationStore } from "../context";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import SplitType from "split-type";
import "./contact.css";
const Contact = () => {
  const responseRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const { darkMode } = useGenerationStore();
  const router = useRouter();

  useEffect(() => {
    const text = new SplitType("#letsTalk");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.1,
    });
  });

  return (
    <div className="contactSection border-red-400 w-[600px] h-[100%]  flex flex-col justify-center">
      <div
        ref={responseRef}
        className={`responseDiv absolute px-5 py-2 left-[-100%] transition-all ease-in-out duration-500  rounded-xl rounded-tl-none bottom-32 z-10 text-white bg-[#cc0000] `}
      ></div>
      <div className="letsTalkContainer relative">
        {/* <span className="absolute letsTalkSpan top-[-5px] left-0 text-white text-5xl mb-5">
          Let's Talk
        </span> */}
        <h1 id="letsTalk" className=" letsTalk text-white text-5xl mb-5">
          Let's Talk
        </h1>
      </div>
      <form
        action={async (formData) =>
          await sendingEmail(formData)
            .then(() => {
              if (
                messageRef.current &&
                nameRef.current &&
                emailRef.current &&
                submitRef.current
              ) {
                messageRef.current.value = "";
                nameRef.current.value = "";
                emailRef.current.value = "";
                submitRef.current.disabled = true;
              }

              if (responseRef.current) {
                responseRef.current.style.backgroundColor = "#4CAF50";
                responseRef.current.innerHTML =
                  "Your email has been successfully delivered to my inbox. <br/> Thank you for reaching out!";
                responseRef.current.style.left = "20px";
                setTimeout(() => {
                  if (responseRef.current && submitRef.current) {
                    submitRef.current.disabled = true;
                    responseRef.current.style.left = "-100%";
                  }
                  router.push("/");
                }, 5000);
              }
            })
            .catch(() => {
              if (responseRef.current && submitRef.current) {
                responseRef.current.innerHTML =
                  "Please check the email and try sending it again.";
                responseRef.current.style.left = "20px";
                submitRef.current.disabled = true;
                setTimeout(() => {
                  if (responseRef.current && submitRef.current) {
                    submitRef.current.disabled = false;
                    responseRef.current.style.left = "-100%";
                  }
                }, 4000);
              }
            })
        }
        className="flex flex-col gap-5 items-center w-[100%]"
      >
        <input
          ref={nameRef}
          className="entry customInput px-5 py-3 transition-all duration-300 rounded-xl rounded-tl-none bg-[#D9D9D9] bg-opacity-40 
        focus:bg-opacity-20 placeholder-white placeholder:opacity-70 text-white outline-none w-[100%]"
          autoComplete="off"
          type="text"
          placeholder="Full Name"
          name="name"
          maxLength={50}
          minLength={1}
          required
        />
        <input
          autoComplete="off"
          ref={emailRef}
          className=" entry customInput px-5 py-3 transition-all duration-300 rounded-xl rounded-tl-none bg-[#D9D9D9] bg-opacity-40
        focus:bg-opacity-20 placeholder-white placeholder:opacity-70 text-white outline-none w-[100%]"
          type="text"
          name="email"
          placeholder="Email"
          maxLength={100}
          minLength={1}
          required
        />
        <textarea
          ref={messageRef}
          className="entry customInputArea px-5 py-3 transition-all duration-300 rounded-xl rounded-tl-none bg-[#D9D9D9] bg-opacity-40 focus:bg-opacity-20
          placeholder-white placeholder:opacity-70 text-white outline-none resize-none h-[200px] w-[100%]"
          placeholder="Hi Yassine, I have an idea which needs your expertise..."
          maxLength={300}
          minLength={1}
          name="message"
          required
        ></textarea>
        <button
          ref={submitRef}
          type="submit"
          className=" sendButton entry cursor-none customInput text-white outline-none w-[70px] h-[50px] rounded-lg transition-all duration-300 
     active:scale-90"
        >
          <span
            className={`sendBackground ${
              darkMode ? "bg-[#56565d]" : "bg-[#b9b9a6]"
            }`}
          ></span>
          Send
        </button>
      </form>
    </div>
  );
};

// className=" sendButton entry cursor-none customInput text-white outline-none w-[70px] h-[50px] bg-[#D9D9D9] bg-opacity-40 rounded-lg transition-all duration-300
// hover:bg-opacity-50 active:scale-90"
export default Contact;
