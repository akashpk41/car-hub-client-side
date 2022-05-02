import React from "react";

const Blog = () => {
  return (
    <div className="p-5 text-center ">
      <div className="md:w-4/5 mt-5 md:mx-auto border-2 p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-mono font-bold mb-3">
          {" "}
          Difference between javascript and nodejs.{" "}
        </h1>
        <p className="text-base leading-loose  text-gray-800  mb-3">
          জাভাস্ক্রিপ্ট একটি জনপ্রিয় প্রোগ্রামিং ল্যাংগুয়েজ। এবং Node js
          জাভাস্ক্রিপ্ট এর রানটাইম। অনেকে মনে করে Node js কোন নতুন প্রোগ্রামিং
          ল্যাংগুয়েজ । কিন্তু Node js কোন প্রোগ্রামিং ল্যাংগুয়েজ নয় Node js
          জাভাস্ক্রিপ্ট এর কোড সার্ভারে রান করে। জাভাস্ক্রিপ্ট হলো এমন একটা
          প্রোগ্রামিং ল্যাংগুয়েজ যা কিনা সব ব্রাউজারেই রান করে। পুর্বে
          জাভাস্ক্রিপ্টকে টয় ল্যাংগুয়েজ বলা হতো কারন তখন জাভাস্ক্রিপ্ট এর কাজ
          ছিলো টুকটাক ব্রাউজারে কোন ইন্টারেক্ট করা৷ কিন্তু Node js এবং
          জাভাস্ক্রিপ্ট এর ES6 আসার পরে একে আরো অনেক শক্তিশালী করে ফেলেছে। 2009
          সালে Ryan Dahl নামের একজন প্রোগ্রামার Node js কে তৈরি করে। Node js
          তৈরি করা হয়েছিল C++ এর কোড লিখে কিন্তু Node js এ জাভাস্ক্রিপ্ট এর কোড
          লিখেই সব কাজ করা হয়।
        </p>
      </div>

      <div className="md:w-4/5 mt-5 md:mx-auto border-2 p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-mono font-bold mb-3">
          {" "}
          When should you use nodejs and when should you use mongodb{" "}
        </h1>
        <p className="text-base leading-loose text-gray-800  mb-3">
          Node js হচ্ছে জাভাস্ক্রিপ্ট এর রানটাইম যা কিনা সার্ভারে জাভাস্ক্রিপ্ট
          কে রান করতে সাহায্য করে। অন্য দিকে Mongo DB হচ্ছে একটি NoSql ডাটাবেজ।
          ডাটাবেইজ হচ্ছে এমন একটা জায়গা যেখানে ইউজারের সমস্তো ইনফোরমেশন সহ
          যাবতীয় ছবি, অডিও ভিডিও ফাইল রাখা হয়। ক্লাইন্ট সাইড থেকে সরাসরি
          ডাটাবেজে ডাটা পাঠানো যায়না। Node js ব্যবহার করে সার্ভার তৈরি করা হয়।
          এবং Node js সার্ভার থেকে ডাটাবেজ কে কানেক্ট করতে হয়। MongoDB তে ডাটা
          রাখতে হলে কালেকশন আকারে ডাটা রাখতে হয়। কিন্তু অন্যান্য ডাটাবেজ যেমন
          Mysql এ ডাটাগুলো টেবিল আকারে থাকে।
        </p>
      </div>

      <div className="md:w-4/5 mt-5 md:mx-auto border-2 p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-bold font-mono mb-3">
          {" "}
          What is the purpose of jwt and how does it work{" "}
        </h1>
        <p className="text-base  leading-loose  text-gray-800  mb-3">
          JWT এর ফুল মিনিং হচ্ছে JSON Web Token. JSON Web Token দিয়ে অনেক কাজ
          করা যায় তার ভিতরে জনপ্রিয় হচ্ছে অথরাইজেশন সিস্টেম। ইউজার যখন ওয়েবসাইটে
          লগিন বা রেজিষ্ট্রেশন করে তখন সার্ভার থেকে তার জন্য একটা jwt টোকেন
          জেনারেট করা হয় এবং তা ইউজারের ব্রাউজারে লোকাল স্টোরেজে সেট করে দেয়।
          পরবর্তীতে ইউজার যখন কোন ডাটা রিকুয়েষ্ট করে তখন রিকুয়েষ্ট এর সাথে
          ব্রাউজারের লোকাল স্টোরেজ থেকে সেই টোকেন সার্ভারে পাঠিয়ে দেয়। সার্ভার
          তখন চেক করে এই ইউজার আগে যে ছিলো সেই নাকি অন্য কেউ। JWT তে তিনটা পার্ট
          থাকে Header, Payload এবং Signature. যদি ইউজারের ইমেল এবং Pyaload এ
          থাকা ইউজারের পূর্বের ইমেইল মিলে যায় তাহলে সার্ভার তখন তাকে সেই ডাটাটা
          দেয়। jWT তে কোন প্রাইভেট বা সেন্সেটিভ ডাটা রাখা ঠিক না, কারন যখন JWT
          জেনারেট করা হয় তখন সে ডাটাকে হিজিবিজি এবং ক্রিপ্টো ভার্শনে কনভার্ট করে
          ফেলে যা যেকোনো ওয়েবসাইটে গেলে ডিকোড করে বের করা যায়।
        </p>
      </div>
    </div>
  );
};

export default Blog;
