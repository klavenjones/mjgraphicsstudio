import { useState } from "react";
import { CheckIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { imageUrlFor } from "../lib/sanity";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

import toast, { Toaster } from "react-hot-toast";

const navigation = {
  breadcrumbs: [
    { id: 1, name: "Shop", href: "/shop" },
    { id: 2, name: "Prints", href: "#" }
  ]
};

const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ product }) {
  const { addItem } = useShoppingCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [price, setPrice] = useState(0.0);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            {/* Bread Crumbs */}
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {navigation.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <Link href={breadcrumb.href}>
                        <a className="font-medium text-gray-500 hover:text-gray-900">
                          {breadcrumb.name}
                        </a>
                      </Link>
                      {breadcrumbIdx !== navigation.breadcrumbs.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {product[0].name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {price
                    ? formatCurrencyString({
                        value: price,
                        currency: "usd"
                      })
                    : formatCurrencyString({
                        value: 3500,
                        currency: "usd"
                      })}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">
                  {product[0].description}
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <CheckIcon
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-2 text-sm text-gray-500">
                  In stock and ready to ship
                </p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={imageUrlFor(product[0].image)
                  .width(500)
                  .height(500)
                  .fit("fill")
                  .url()}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <form>
                <div>
                  {/* Size selector */}
                  <RadioGroup
                    value={{ size: selectedSize, price: price }}
                    onChange={(val) => {
                      setSelectedSize(val.size);
                      setPrice(val.price);
                    }}
                  >
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                      Size
                    </RadioGroup.Label>
                    <div className="mt-1 w-full grid grid-cols-1 gap-4 sm:grid-cols-4">
                      {product[0].frameSizes.map((size) => (
                        <RadioGroup.Option
                          as="div"
                          key={size._key}
                          value={{ price: size.price, size: size.size }}
                          data-size={size}
                          className={({ active }) =>
                            classNames(
                              active ? "ring-2 ring-black" : "",
                              "relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label
                                as="p"
                                className="text-base font-medium text-gray-900"
                              >
                                {size.size}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="p"
                                className="mt-1 text-sm text-gray-500"
                              >
                                {formatCurrencyString({
                                  value: size.price,
                                  currency: "usd"
                                })}
                              </RadioGroup.Description>
                              <div
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked || size.size === selectedSize
                                    ? "border-black"
                                    : "border-transparent",
                                  "absolute -inset-px rounded-lg pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                  >
                    <span>What size should I buy?</span>
                    <QuestionMarkCircleIcon
                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="detail-buttons mt-10">
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      try {
                        if (!selectedSize || !price) {
                          toast.error(
                            "Please select a frame size before you add an item to the cart.",
                            {
                              style: {
                                backgroundColor: "rgba(255, 255, 255, 1)",
                                color: "rgba(255, 95, 70, 1)"
                              }
                            }
                          );
                          return;
                        }
                        addItem({
                          ...product[0],
                          id: `${product[0].id}-${selectedSize}`,
                          price: price
                        });
                        toast.success("Item has been added to your cart", {
                          duration: 2500,
                          position: "top-center",
                          style: {
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            color: "rgba(5, 95, 70, 1)"
                          }
                        });
                      } catch (error) {
                        toast.error("Something went wrong adding item.", {
                          style: {
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            color: "rgba(5, 95, 70, 1)"
                          }
                        });
                      }
                    }}
                    disabled={!selectedSize || !price}
                    className={`detail-button ${
                      !selectedSize || !price ? "disabled" : "opacity-100"
                    }`}
                  >
                    Add to bag
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="group inline-flex text-base font-medium"
                  >
                    <ShieldCheckIcon
                      className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500 hover:text-gray-700">
                      Lifetime Guarantee
                    </span>
                  </a>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
