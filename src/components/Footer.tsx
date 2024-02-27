import { Anchor, Divider } from "@mantine/core";
import React from "react";
import facebookimg from "../images/facebook.png";
import titokimg from "../images/titok.jpg";
import pms from "../images/pms.png";
import youtubeimg from "../images/youtube.png";
import telegramimg from "../images/telegram.jpg";
import twitterimg from "../images/twitter.png";


const Footer = () => {
  return (
    <div className=" bg-gray-900 text-gray-50 p-5 mt-5">
      <div>
        <img src={pms} alt="logo" className="h-8 w-auto rounded"></img>
        <div>Making Working Environment confort for developers</div>
        <div className="flex ml-10 gap-5 m-5">
          <Anchor href="https://www.facebook.com/" target="_blank">
            <img className="h-8 w-8 rounded-full" src={facebookimg} alt="" />
          </Anchor>
          <Anchor href="https://www.youtube.com/" target="_blank">
            <img className="h-8 w-8 rounded-full" src={youtubeimg} alt="" />
          </Anchor>
          <Anchor href="https://www.tiktok.com/" target="_blank">
            <img className="h-8 w-8 rounded-full" src={titokimg} alt="" />
          </Anchor>
          <Anchor href="https://www.telegram.com/" target="_blank">
            <img className="h-8 w-8 rounded-full" src={telegramimg} alt="" />
          </Anchor>
          <Anchor href="https://www.twitter.com/" target="_blank">
            <img className="h-8 w-8 rounded-full" src={twitterimg} alt="" />
          </Anchor>
        </div>
      </div>

      <div className="flex flex-col min-[320px]:flex-row justify-between gap-8 mt-16 mb-10">
        <div>
          <div className="text-center text-lg font-bold"> Support </div>
          <div>
            <p>
              we are to glad to serve you! We use latest trends to do more
              effectivily
            </p>
          </div>
        </div>

        <div>
          <div className="text-center text-lg font-bold">Policy</div>
          <p>
            We Support you by making confortable working environment, we are to
            glad to serve you!
          </p>
        </div>

        <div>
          <div>
            <div className="text-center text-lg font-bold"> Company </div>
            <ul>
              <li>About</li>
              <li>Documentation</li>
              <li>Mebership</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-2/3 border-gray-700"></hr>
      <div className="p-3 text-center">Reserved for Balsha 2024</div>
    </div>
  );
};

export default Footer;
