import React from 'react';

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

import {Chip, Input, InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FITTERS = [
    {$id:'2',
     filterName: 'Community Type',
    options: ['Corporete', 'Franchisi']
    },
    {$id:'3',
     filterName: 'Poke Type',
    options: ['Fire', 'water', 'rock']
    }
];
interface IFilterSettigs {
    name: string;
    value: string;
}

const existItemBy = (param: keyof IFilterSettigs ) => (array:IFilterSettigs[], value:string) => array.some((elment) => elment[param] === value);
export const exitItemByValue = existItemBy('value');
const addNoRepeatItems = (array:IFilterSettigs[], newItem:IFilterSettigs, comp:keyof IFilterSettigs  = 'value') => {
    const existItem = existItemBy(comp);
     if(!existItem(array, newItem[comp])) {
        return[newItem, ...array]
     } else {
         return array.filter((elm) => elm[comp] !== newItem[comp])
     }
  };

export function MultipleSelect() {
  const classes = useStyles();
  const [filterSelected, setFilterSelected] = React.useState<IFilterSettigs[]>([]);

  const handleChange = (value:string, name:string) => {
      
      
      const newFilters = addNoRepeatItems(filterSelected, {name, value}, 'value') as IFilterSettigs[];
      
      console.log('VALUE', newFilters);
     setFilterSelected(newFilters);
  };
  const HandlerRender = (selected: any) => {
      return (<>
      {selected.map(({value, name}: IFilterSettigs, i: number) => (
                  <Chip
                    key={`${value}-${i}`}
                    label={value}
                    className={classes.chip}
                  />
                ))}
      </>)
  }

  return (
    <div>
        {FITTERS.map((filter) => (
      <FormControl className={classes.formControl} key={filter.filterName}>
        <InputLabel id="demo-mutiple-checkbox-label">{filter.filterName}</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={filterSelected}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={HandlerRender}
          >
              {
                filter.options.map((option)=>(

                <MenuItem key={option} value={option} onClick={()=> handleChange(option, filter.filterName)}>
                    <Checkbox checked={exitItemByValue(filterSelected, option)}/>
                    <ListItemText primary={option} />
                </MenuItem>
                ))
              }
        </Select>
        </FormControl>
          ))}
     </div>
  );
}
