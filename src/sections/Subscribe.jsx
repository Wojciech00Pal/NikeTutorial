import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[64px] lg:max-w-md font-palanquin font-bold">
        Sign Up From
      <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 py-2.5 sm:border sm:border-slate-grey rounded-full">
        <input type="text" placeholder="subscribe..." className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullwidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe