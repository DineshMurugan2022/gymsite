import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Nutrition = () => {
  return (
    <div className="container-fluid bg- text-dark" style={{padding: "20px"}}>
      {/* Hero Section */}
      <header
  className="text-white text-center py-5"
  style={{
    backgroundImage: "url('https://thumbs.dreamstime.com/b/sports-nutrition-fitness-equipment-sports-nutrition-supplements-healthy-food-dumbbells-black-background-fitness-112716854.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "50vh",
  }}
>
  <h1 className="display-4">Fuel Your Fitness</h1>
  <p className="lead">Eat right, train hard, and achieve your goals.</p>
</header>

      {/* Nutrition Guide */}
      <section className="container my-5">
        <h2 className="mb-4">Macro nutrient Breakdown</h2>
        <p>Understanding macro nutrients is key to optimal performance.</p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h3 className="card-title">Protein</h3>
              <p className="card-text">Essential for muscle growth and recovery.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h3 className="card-title">Carbohydrates</h3>
              <p className="card-text">The primary source of energy for workouts.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h3 className="card-title">Fats</h3>
              <p className="card-text">Supports overall health and hormone production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plan Section */}
      <section className="bg-secondary text-white py-5">
        <div className="container">
          <h2 className="mb-4">Sample Meal Plan</h2>
          <ul className="list-group">
            <li className="list-group-item">Breakfast: Oatmeal with banana & protein shake</li>
            <li className="list-group-item">Lunch: Grilled chicken, quinoa, and steamed vegetables</li>
            <li className="list-group-item">Dinner: Salmon, sweet potatoes, and spinach salad</li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container my-5">
        <h2 className="mb-4">Get Personalized Nutrition Advice</h2>
        <form className="shadow-sm p-4 bg-white rounded" method="post" action="feedback.php" onsubmit="return validate_form(this)">
          <div className="mb-3">
            <input type="text" placeholder="Your Name" name="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <input type="phone number" placeholder="Your mobile number" name="phone" className="form-control" required />
          </div>
          <div className="mb-3">
            <input type="email" placeholder="Your Email" name="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <textarea placeholder="Your Goals" name="goals" className="form-control" required></textarea>
          </div>
          <button className="btn btn-primary"  action="http://localhost/yourfolder/feedback.php">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Nutrition;
