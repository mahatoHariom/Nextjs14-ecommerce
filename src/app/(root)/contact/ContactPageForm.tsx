"use client"
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const ContactPageForm = () => {
  const form = useForm();
  return (
    <>
      <h1 className="p-5 text-4xl font-semibold text-center">Contact</h1>
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[80%] m-auto gap-5 mt-10 ">
        <div className="w-full border bg-card p-2">
          <h1 className="font-semibold">Contact Information</h1>
          <p className="text-gray-500">
            Fill the form below or write us. We will help you as soon as
            possible.
          </p>
          <div className="flex flex-col justify-between gap-5 mt-5 lg:flex-row">
            <span className="bg-[#feeae5] h-full flex flex-col items-center lg:p-10 lg:w-[50%]">
              <div className="p-3 border border-black rounded-full ">
                <Mail size={30} color="orange" />
              </div>
              <h1 className="font-semibold">Phone</h1>
              <p>+977 9761625523</p>
            </span>
            <span className="bg-[#d2efff] h-full flex flex-col items-center lg:p-10 lg:w-[50%]">
              <div className="p-3 border border-black rounded-full ">
                <Mail size={30} color="orange" />
              </div>
              <h1 className="font-semibold">Email</h1>
              <p>mahatohariom31@gmail.com</p>
            </span>
          </div>

          <div className="hidden mt-3 lg:block">
            <h1 className="font-semibold ">Address</h1>
            <div className="mt-1 border ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.381228888843!2d85.40658157618036!3d27.674609826933214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b21fe17155f%3A0xafd52ef58b756b7f!2sSHM%20stationery!5e0!3m2!1sen!2snp!4v1696156470056!5m2!1sen!2snp"
                allowFullScreen
                loading="lazy"
                style={{
                  width: "100%",
                }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* form section */}
        <div className="w-full bg-white border">
          <div className="relative">
            <h1 className="p-5 pb-3 text-3xl font-semibold text-center">
              Get In Touch
            </h1>
            <div className="absolute bottom-0 w-[20%] m-auto lg:ml-32">
              <svg
                width="354"
                height="30"
                viewBox="0 0 354 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                  stroke="#FFBB38"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-5">
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="FirstName" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email </FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message </FormLabel>
                      <FormControl>
                        <Input placeholder="message" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>

            <Button>Send Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageForm;
