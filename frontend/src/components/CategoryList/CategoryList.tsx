import { useEffect } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../../qraphql/queries/categories.queries';

export interface CategoryItemProp {
  id: number;
  name: string;
  tasksCount: number;
  dateCreated: Date;
}
const CategoryList = () => {
  const { data, refetch } = useQuery(GET_ALL_CATEGORIES);

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

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
