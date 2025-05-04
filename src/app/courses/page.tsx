"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 pt-36">
      <h1 className="text-4xl md:text-6xl text-center font-sans font-bold mb-16 text-white">
        All Courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {courseData.courses.map((course) => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="relative group/card backdrop-blur-lg bg-white/5 dark:bg-white/5 border border-white/10 shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-300 rounded-2xl w-[90vw] sm:w-[26rem] p-6">
              <CardItem translateZ="50" className="text-2xl font-semibold text-white">
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm text-gray-300 mt-2"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" rotateX={10} rotateZ={-5} className="w-full mt-4">
                <Image
                  src={course.image}
                  height={1000}
                  width={1000}
                  className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-full text-xs font-medium text-white hover:underline"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-all"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
