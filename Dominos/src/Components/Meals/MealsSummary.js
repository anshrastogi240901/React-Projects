import styles from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2>Delicious Pizza, Delivered To You</h2>
      <p>
        Choose your favorite Pizza from our broad selection of available pizza
        and enjoy a delicious delight at home.
      </p>
      <p>
        All our Pizza are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
}

export default MealsSummary;
