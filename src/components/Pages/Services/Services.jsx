import React from 'react'
import DELIVERY_ICON from "../../../assets/svg/roket.svg"
import SECURE_ICON from "../../../assets/svg/secure.svg"
import AFFORDABLE_PRICE_ICON from "../../../assets/svg/bestPricing.svg"
import SUPPORT_ICON from "../../../assets/svg/support.svg"
import STAR_ICON from "../../../assets/svg/star.svg"

const services = [
    { icon: DELIVERY_ICON, title: "Fast Delivery", content: "Experience our lightning-fast delivery service, ensuring your items reach you promptly and efficiently." },
    { icon: SECURE_ICON, title: "Security", content: "Rest assured with our top-notch security protocols, ensuring your products are delivered safely and securely every time." },
    { icon: AFFORDABLE_PRICE_ICON, title: "Affordable Costing", content: "Experience our cost-effective solutions for your exporting needs, ensuring competitive pricing without compromising on quality or reliability." },
    { icon: SUPPORT_ICON, title: "24 x 7 support", content: "Count on our round-the-clock support to address any inquiries or issues promptly, ensuring seamless assistance whenever you need it." },
    { icon: STAR_ICON, title: "Vegetables Exporters", content: "Partner with us, premier vegetable exporters, for reliable, efficient service that ensures your produce arrives fresh and on time, every time." },
    { icon: STAR_ICON, title: "Fruits Exporters", content: "Choose us as your trusted fruit exporters, providing dependable service and a wide range of premium fruits delivered fresh to your destination." },
]

function Services() {
    return (
        <section id='services' className='py-5'>
            <div className='containerAlignSpace py-3'>
                <div className='container p-0 m-0 mw-100'>
                    <h3 className='text-center py-3 text-white' style={{ backgroundColor: '#f1c40f' }}>Services</h3>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-0 m-0 g-3 pt-4'>
                        {services.map((item, ind) => (
                            <div className='col text-center' key={ind}>
                                <div className="rounded bg-light p-3 h-100 shadow">
                                    <img src={item.icon} width={50} height={50} alt='' className='my-3' />
                                    <h3 className='fs-5'>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services