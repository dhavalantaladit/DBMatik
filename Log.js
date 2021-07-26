import React, {useState} from 'react';

import {
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import SelectMultiple from 'react-native-select-multiple'

const LogModal = ({modalVisible, setModalVisible}) => {
  const options = ['12.08.19 11:38:00 Do you really want to delete user "maintenance"? - answered with no 20037', '12.08.19 11:24:29 Do you really want to delete all _ data? - answered with no 1006000'];
  const [selected, setSelected] = useState([]);

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex:1, backgroundColor: 'rgba(52, 52, 52, 0.9)', opacity: 1}}>
          <Pressable style={{padding: 10}} onPress={()=> setModalVisible(!modalVisible)}>
            <Text style={{alignSelf: 'flex-end', color: 'white', marginRight: 10, fontSize: 25}}>྾</Text>
          </Pressable>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Message history</Text>
              </View>
              <View style={{margin: 10, padding: 10}}>
                <SelectMultiple
                  items={options}
                  selectedItems={selected}
                  onSelectionsChange={setSelected} 
                />
                <TouchableOpacity style={{alignSelf: 'center', padding: 10, margin: 10, borderRadius: 5, borderWidth: 1, backgroundColor: '#dbdbdb', borderColor: '#dbdbdb'}}>
                  <Text style={{fontSize: 17, color:'#363636'}}>🗑 Empty message history</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
  )
}
export default LogModal;