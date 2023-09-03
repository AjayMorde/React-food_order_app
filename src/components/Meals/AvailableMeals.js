import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich buttery tomato sauce',
    price: 350,
  },
  {
    id: 'm2',
    name: 'Paneer Tikka',
    description: 'Marinated and grilled cottage cheese cubes',
    price: 280,
  },
  {
    id: 'm3',
    name: 'Biryani',
    description: 'Fragrant rice dish with spices and choice of meat',
    price: 400,
  },
  {
    id: 'm4',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato',
    price: 150,
  },
  
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;