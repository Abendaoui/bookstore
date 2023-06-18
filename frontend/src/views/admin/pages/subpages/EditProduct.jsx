import React from 'react'

const EditProduct = () => {
  return (
      <section className="mx-auto mt-2 max-w-5xl bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-center text-gray-600 text-xl">
              Add New Employee
          </h1>
          <form className="mt-8" onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                  {/* UserName */}
                  <div>
                      <label
                          htmlFor="username"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Employee Full Name
                      </label>
                      <input
                          type="text"
                          id="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                          placeholder="John"
                          required
                          autoFocus
                      />
                  </div>
                  {/* Email */}
                  <div>
                      <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Employee Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                          placeholder="john@gmail.com"
                          required
                      />
                  </div>
                  {/* Password */}
                  <div>
                      <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Password
                      </label>
                      <input
                          type="password"
                          id="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                          placeholder="********"
                          required
                      />
                  </div>
                  {/* Address */}
                  <div>
                      <label
                          htmlFor="address"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Employee Address
                      </label>
                      <input
                          type="text"
                          id="address"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                          placeholder="City , Street, Postal Code"
                          required
                      />
                  </div>
                  {/* Role */}
                  <div>
                      <label
                          htmlFor="role"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Employee Role
                      </label>
                      <input
                          type="text"
                          id="role"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992]dark:focus:border-[#c5a992]"
                          placeholder="Product Management"
                          required
                      />
                  </div>
                  {/* Phone Number */}
                  <div>
                      <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Phone number
                      </label>
                      <input
                          type="tel"
                          id="phone"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c5a992] focus:border-[#c5a992] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#c5a992] dark:focus:border-[#c5a992]"
                          placeholder="06-41-29-61-76"
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          required
                      />
                  </div>
                  {/* Profile */}
                  <div className="col-span-full">
                      <label
                          htmlhtmlFor="cover-photo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                      >
                          Cover photo
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                              <PhotoIcon
                                  className="mx-auto h-5 w-12 text-gray-300"
                                  aria-hidden="true"
                              />
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                  <label
                                      htmlhtmlFor="file-upload"
                                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                  >
                                      <span className="text-[#c5a992]">
                                          Upload a file
                                      </span>
                                      <input
                                          id="file-upload"
                                          name="file-upload"
                                          type="file"
                                          className="sr-only"
                                      />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs leading-5 text-gray-600">
                                  PNG, JPG, JPEG up to 2MB
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <button
                  type="submit"
                  className="text-white bg-[#c5a992] hover:bg-[#c5a992] focus:ring-4 focus:outline-none focus:ring-[#c5a992] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#c5a992] dark:hover:bg-[#c5a992] dark:focus:ring-[#c5a992]"
              >
                  Submit
              </button>
          </form>
      </section>
  );
}

export default EditProduct
