import React from "react";
interface IimgCache {
  __cache:any,
  read:any,
  clearImg: any,
}
const imgCache:IimgCache = {
  __cache: {},
  read(src:string) {
    if (!src) {
      return;
    }

    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.__cache[src] = true;
          resolve(this.__cache[src]);
        };
        img.src = src;
        setTimeout(() => resolve({}), 7000);
      }).then((img) => {
        this.__cache[src] = true;
      });
    }

    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src];
    }
    return this.__cache[src];
  },
  clearImg(src:string) {
    delete this.__cache[src];
  }
};

interface ISuspenseImgProps {
  src:string,
  alt:string,
}

export const SuspenseImg = ({ src, alt, ...rest }:ISuspenseImgProps) => {
  imgCache.read(src);

  return <img alt={alt} src={src} {...rest} />;
};
