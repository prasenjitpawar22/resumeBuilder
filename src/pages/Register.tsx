import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-login w-screen h-screen
            flex tablet:bg-login tablet:bg-large-size 
            desktop:bg-large-size justify-center items-center bg-no-repeat ">
      <Box
        className="phone:w-8/12 laptop:w-5/12 backdrop-blur-2xl drop-shadow-custom">
        <Fields className="w-8/12 py-12">
          <div className="flex flex-col justify-start">
            <PageBrandIcon className='rounded-full '
              src='./brand.png' />
            <h1 className="text-[38px] mb-4 font-gilroydark text-primary">Register</h1>
            <form>
              <div className="flex flex-col">
              <div className="flex flex-col mb-5">
                  <label className="text-primary text-[14px] mb-1">Full Name</label>
                  <input className="font-gilroylight rounded bg-gray-200 border-2 px-2 py-1 placeholder-[#BCBEC0] 
                   focus:border-purple-500 focus:outline-none focus:shadow-inner"
                    placeholder="Full name" type={"text"}
                  />
                </div>
                <div className="flex flex-col mb-5">
                  <label className="text-primary text-[14px] mb-1">Email</label>
                  <input className="font-gilroylight rounded bg-gray-200 border-2 px-2 py-1 placeholder-[#BCBEC0] 
                   focus:border-purple-500 focus:outline-none focus:shadow-inner"
                    placeholder="username@gmail.com" type={"email"}
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label className="text-primary text-[14px] mb-1">Password</label>
                  <input className="font-gilroylight rounded bg-gray-200 border-2 px-2 py-1 placeholder-[#BCBEC0] 
                   focus:border-purple-500 focus:outline-none focus:shadow-inner"
                    placeholder="********" type={"password"}
                  />
                </div>
                <button
                  className="bg-[#F25019] hover:bg-[#d84616] rounded py-2 font-gilroylight
                text-[#FFFFFF] text-[20px] mb-4"
                  type="submit">Register</button>
                <p className="text-center text-primary text-[14px] mb-2">Or continue with</p>
                <p className="text-center text-primary text-[14px]">
                  Already have an account?
                  <Link to={"/login"} className="font-gilroylight text-[14px] 
                  text-primary" > Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </Fields>
      </Box>
    </div >
  );
}

export default Register;

// const BackgroundDiv = styled.div`

// `
const Box = styled.div`
    background: rgba(255, 255, 255, 0.3);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
 
`
const Fields = styled.div`
  /* width: 70%;
  height: 80%; */
`
const PageBrandIcon = styled.img`
  width: 2rem;
  height: 2rem;
  
`