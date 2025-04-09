import React, { useEffect } from "react";
import styled from "styled-components"; 

const Subscription = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = (amount) => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_Mk659ISVbs7cZv",
      amount: amount * 100, 
      currency: "INR",
      name: "Dinesh",
      description: "Gym Membership Payment",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Dinesh",
        email: "dinesh@gmail.com",
        contact: "1234567890",
      },
      theme: {
        color: "#3399cc",
      },
      notes: {
        address: "Razorpay",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Container>
      <h2>Choose Your Plan</h2>
      <StyledWrapper>
        {/* <PlanCard>
          <h3>Monthly Plan</h3>
         
          <img src="https://cdn.pixabay.com/photo/2023/03/12/16/10/man-7847248_1280.jpg" alt="" />
          <p>₹1000 / month</p>
          <button onClick={() => handlePayment(1000)}>Pay ₹1000</button>
        </PlanCard>
        <PlanCard>
          <h3>Yearly Plan</h3>
          <img src="https://cdn.pixabay.com/photo/2023/03/12/16/10/man-7847248_1280.jpg" alt="" />
          <p>₹10000 / year</p>
          <button onClick={() => handlePayment(10000)}>Pay ₹10000</button>
        </PlanCard> */}
        <PlanCard>
        <div class="card-container">
  <div class="card">
  <div class="front-content">
  <img src="https://cdn.pixabay.com/photo/2023/03/12/16/10/man-7847248_1280.jpg" alt=""></img>
  </div>
  <div class="content">
    <p class="heading">Monthly Plan</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipii
      voluptas ten mollitia pariatur odit, ab
      minus ratione adipisci accusamus vel est excepturi laboriosam magnam
      necessitatibus dignissimos molestias.
    </p>
  </div>
</div>
</div>
          <button onClick={() => handlePayment(12000)}>Pay ₹12000</button>
        </PlanCard>
        <PlanCard>
        <div class="card-container">
  <div class="card">
  <div class="front-content">
  <img src="https://cdn.pixabay.com/photo/2024/04/19/16/56/ai-generated-8706775_1280.jpg" alt=""></img>
  </div>
  <div class="content">
    <p class="heading">Yearly Plan</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipii
      voluptas ten mollitia pariatur odit, ab
      minus ratione adipisci accusamus vel est excepturi laboriosam magnam
      necessitatibus dignissimos molestias.
    </p>
  </div>
</div>
</div>
          <button onClick={() => handlePayment(9000)}>Pay ₹9000</button>
        </PlanCard>
        <PlanCard>
        <div class="card-container">
  <div class="card">
  <div class="front-content">
  <img src="https://w0.peakpx.com/wallpaper/560/825/HD-wallpaper-bodybuilder-gym-hard-healthy-life-happy-thumbnail.jpg" alt=""></img>
  </div>
  <div class="content">
    <p class="heading">Custom plan</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipii
      voluptas ten mollitia pariatur odit, ab
      minus ratione adipisci accusamus vel est excepturi laboriosam magnam
      necessitatibus dignissimos molestias.
    </p>
  </div>
</div>
</div>
          <button onClick={() => handlePayment(5000)}>Pay ₹5000</button>
        </PlanCard>
      </StyledWrapper>
    </Container>
  );
};

const Container = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://i.etsystatic.com/29035216/r/il/7e7e20/3640388699/il_1080xN.3640388699_sg0x.jpg");
  background-size: cover;
  background-position: center;
  color: white;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
`;

const PlanCard = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
  width: 100%;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  button {
    background: #ffcc00;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background: #ff9900;
  }
      img {
    width: 115%;
    height: 115%;
    object-fit: cover;
    border-radius: 8px;
  }

  .card-container {
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.card .front-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .front-content p {
  font-size: 32px;
  font-weight: 700;
  opacity: 1;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  pointer-events: none;
  transform: translateY(-96%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .content .heading {
  font-size: 32px;
  font-weight: 700;
}

.card:hover .content {
  transform: translateY(0);
}

.card:hover .front-content {
  transform: translateY(30%);
}

.card:hover .front-content p {
  opacity: 0;
}



`;

export default Subscription;
