import CategoryItem from '../CategoryItem/CategoryItem';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../../qraphql/queries/categories.queries';

const CategoryList = () => {
  const { data } = useQuery(GET_ALL_CATEGORIES);

  return (
    <Grid container spacing={4}>
      {data &&
        data.allCategories.map((item) => (
          <CategoryItem key={item.id} category={item} />
        ))}
    </Grid>
  );
};

export default CategoryList;
