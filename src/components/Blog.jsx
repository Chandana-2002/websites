import React from "react";

const Blog = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 sm:items-center gap-8">
        <div class="sm:order-2">
          <div class="relative pt-[50%] sm:pt-[100%] rounded-lg">
            <img
              class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
              alt="Image Description"
            />
          </div>
        </div>

        <div class="sm:order-1">
          <p class="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            Business insight
          </p>

          <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
            <a
              class="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              How to get buy-in and budget for direct hiring
            </a>
          </h2>

          <div class="mt-6 sm:mt-10 flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 sm:h-14 sm:w-14 rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </div>

            <div class="ml-3 sm:ml-4">
              <p class="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
                Louise Donadieu
              </p>
              <p class="text-xs text-gray-500">
                Strategic Marketing Consultant
              </p>
            </div>
          </div>

          <div class="mt-5">
            <a
              class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              Read more
              <svg
                class="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
