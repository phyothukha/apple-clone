"use client";
import { useCallback, useEffect, useState } from "react";

const useScrollOffset = () => {
  const [offset, setOffset] = useState<number>(0);

  const onScrollHandler = useCallback(() => {
    setOffset(window.scrollY);
  }, []);

  useEffect(() => {
    onScrollHandler();
  }, [onScrollHandler]);

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
  }, [onScrollHandler]);

  return offset;
};

export default useScrollOffset;
