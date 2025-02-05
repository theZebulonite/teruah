const getBasePath = (): string => {
    return process.env.NEXT_PUBLIC_BASE_PATH || "";
  };
  
  export default getBasePath;
  