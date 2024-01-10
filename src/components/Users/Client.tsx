"use client";
import getProducts from "@/actions/getUsers";

import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import React from "react";

async function createProducts() {
  try {
    const data = await axios.post("http://localhost:8080/api/v1/post/create", {
      title: "hariom",
      content:"DSfsdf",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(data);
  } catch (error) {
    return { error };
  }
}

const Client = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
 

  const { mutate } = useMutation({
    mutationKey: ["products"],
    mutationFn: createProducts,
    onSuccess: (d) => {
      console.log(d);
      //   alert("done");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return (
    <>
      {data?.map((item, i) => {
        return <p key={i}>{item?.title}</p>;
      })}
      <button onClick={() => mutate()}>click me</button>
    </>
  );
};

export default Client;
