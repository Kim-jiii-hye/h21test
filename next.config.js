
/** @type {import('next').NextConfig} */
const nextConfig = {
  
}

// module.exports = nextConfig
module.exports = {
  images: {
    domains: ['img.hani.co.kr'],
  },
  experimental: {
    images: {
        layoutRaw: true,
        allowFutureImage: true,
    }
  },
  reactStrictMode: false,
  async rewrites(){
    return {
      fallback:[
        {
          source:'/politics',
          destination: `http://mapi_h21-master.hani.co.kr/on/sec/list/politics`
        },
        {
          source:'/politics/:id',
          destination: `http://mapi_h21-master.hani.co.kr/on/sec/list/politics/:id`
        }
      ]
      
    }
  },
  // nextConfig
}
