"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourites } from "../Store/Favouriteslice";
import Link from "next/link";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouriteItems = useSelector((state) => state.favourites?.favourites || []);

  const handleRemoveFavourite = (id) => {
    dispatch(removeFromFavourites({ id }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Your Favourites
      </h1>

      {/* Favourites List */}
      <div className="space-y-4">
        {favouriteItems.length > 0 ? (
          favouriteItems.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">Category: {item.category}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveFavourite(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            You have no favourites yet.{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              Start adding some!
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
