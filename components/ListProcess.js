import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, deleteItem} from '../redux/actions/listAction.js';
import {todoAdded, todoDelete} from '../redux/reducers/listReducers';
function ListProcess(props) {
  const dispatch = useDispatch();

  const stateList = useSelector(state => state.paymentList.entities);

  const [number, onChangeNumber] = useState('');
  const [title, onChangeTitle] = useState('');

  const flatRef = useRef();

  const [totalPay, setTotalPay] = useState(0);

  return (
    <>
      <View style={styles.contain}>
        <View style={styles.header}>
          <Text style={styles.productTitle}>Product name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholderTextColor={'#fafafa'}
            placeholder="Enter product name..."
            keyboardType="default"
            maxLength={18}
          />
          <Text style={styles.productTitle}>Product amount:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholderTextColor={'#fafafa'}
            placeholder="Enter the product amount..."
            keyboardType="numeric"
            maxLength={18}
          />
          <Button
            title="Add Payment"
            color={'#fafafa'}
            onPress={() => {
              if (number.length !== 0) {
                dispatch(todoAdded({title, number}));

                setTotalPay(
                  Number.parseInt(totalPay, 10) + Number.parseInt(number, 10),
                );
              }
            }}></Button>
          <View style={styles.totalPayContainer}>
            <Text style={styles.totalPayText}>Total Payment: {totalPay}$</Text>
          </View>
        </View>

        <FlatList
          inverted={true}
          data={stateList}
          ref={flatRef}
          style={styles.payFlatContain}
          renderItem={item => {
            let tempItem = item.item;
            return (
              <View style={styles.flatItemContainer}>
                <Text style={styles.flatTitleText}>{tempItem.title}</Text>
                <Text style={styles.flatPayText}>-{tempItem.number}$</Text>
                <Button
                  title="Delete"
                  onPress={() => {
                    dispatch(todoDelete(item.item.number));
                    setTotalPay(
                      Number.parseInt(totalPay, 10) -
                        Number.parseInt(item.item.number, 10),
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  contain: {width: '100%', minHeight: 100, backgroundColor: 'transparent'},
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#fafafa',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 20,
    marginBottom: 20,
  },
  productTitle: {fontSize: 12, color: '#fafafa', fontWeight: '400'},
  totalPayContainer: {
    width: '100%',
    height: 20,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  totalPayText: {fontSize: 14, fontWeight: '800', color: 'red'},
  payFlatContain: {
    width: '100%',
    minHeight: 100,
    backgroundColor: 'transparent',
  },
  flatItemContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#fafafa',
    borderBottomColor: '#0f0f0f',
    borderBottomWidth: 1,
    marginLeft: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 5,
  },
  flatTitleText: {fontSize: 12, fontWeight: 700, color: '#0f0f0f'},
  flatPayText: {fontSize: 12, fontWeight: 700, color: 'red'},

  input: {
    width: '90%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#fafafa',
    borderRadius: 50,
    padding: 10,
    color: '#fafafa',
  },
});
export default ListProcess;
