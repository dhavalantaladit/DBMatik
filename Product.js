import React, {useState} from 'react';

import {
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import SelectMultiple from 'react-native-select-multiple'

const ProductModal = ({modalVisible, setModalVisible}) => {
    const options = ['CB15531013AR', 'CB30431050', 'CB30431050product3kurzerpitch', 'default'];
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
          <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5, paddingBottom: 10}}>
            <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
              <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Loaded product</Text>
            </View>
            <View style={{flexDirection: 'row', margin: 20, marginBottom: 0, alignItems: 'center'}}>
              <TextInput placeholder="CB1FF31013AR" style={{backgroundColor: 'white', borderRadius: 10, margin: 5, width: '75%'}}/>
              <View style={{padding: 3, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white', justifyContent: 'center'}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 20, color: '#363636'}}>
                  📂Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
            <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
              <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Product administration</Text>
            </View>
            <View style={{flexDirection: 'row', margin: 20, marginBottom: 0, alignItems: 'center'}}>
              <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5, width: '75%'}}/>
              <TouchableOpacity style={{padding: 3, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white', justifyContent: 'center', justifyContent: 'flex-end'}}>
                <Text style={{fontSize: 20, color: '#363636'}}>
                📤Load
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 20, marginBottom: 0, flexDirection: 'row'}}>
              <SelectMultiple
                items={options}
                selectedItems={selected}
                onSelectionsChange={setSelected} 
              />
              <View>
              <TouchableOpacity style={{padding: 3, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white', justifyContent: 'center', marginBottom: 10, marginLeft: 2}}>
                <Text style={{fontSize: 20, color: '#363636'}}>
                📨Copy to
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 3, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white', justifyContent: 'center', marginBottom: 10, marginLeft: 2}}>
                <Text style={{fontSize: 20, color: '#363636'}}>
                🗑Delete
                </Text>
              </TouchableOpacity>
              <View style={{marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                  Lot number
                </Text>
                <TextInput placeholder="112129003021" style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
              </View>
              <View style={{marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                  Squeegee
                </Text>
                <TextInput placeholder="80-360-005" style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
              </View>
              <View style={{marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                  Screen
                </Text>
                <TextInput placeholder="SC01AKA-190524" style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
              </View>
              <View style={{marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                  Paste
                </Text>
                <TextInput placeholder="9511A6-0001902005-25" style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
              </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
    )
}
export default ProductModal;