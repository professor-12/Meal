import { useRef } from 'react'

const Checkout = (props) => {


    const nameInput = useRef();
    const street = useRef();
    const postalcode = useRef();
    const address = useRef();


    const confirmhandler = (event) => {


        event.preventDefault()


        const enteredName = nameInput.current.value;
        const enteredstreet = street.current.value;
        const enteredpostalcode = postalcode.current.value;
        const entereaddress = address.current.value;


      

            props.onConfirm({
                name:enteredName,
                street:enteredstreet,
                city:entereaddress ,
                postalCode:enteredpostalcode
            })


    }
    return (

        <>
            <form onSubmit={confirmhandler} className='p-4'>
                <div className='overflow-y-scroll h-[12rem]'>
                    <div className='space-y-3 w-[60%] '>
                        <div className='flex flex-col'>
                            <label className='font-semibold' htmlFor="name">Name</label>
                            <input ref={nameInput} className='border p-1 border-zinc-400' type="text" id='name' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold' htmlFor="street">Street</label>
                            <input ref={street} type="text" id='street' className='border p-1 border-zinc-400' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="postalcode">Postal code</label>
                            <input ref={postalcode} className='border p-1 border-zinc-400' type="text" id='postalcode' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='' htmlFor="address">Address</label>
                            <input ref={address} className='border p-1 border-zinc-400' type="text" id='address' />
                        </div>
                    </div>
                </div>


                <div className='space-x-3 flex justify-end'>
                    <button className='bg-gray-600 p-3 rounded-xl text-white' onClick={props.onhide} type='button'>
                        Cancel
                    </button>
                    <button onClick={confirmhandler} className='bg-orange-900 px-7 text-white rounded-3xl '>
                        Confirm
                    </button>
                </div>
            </form>
        </>
    )
}

export default Checkout