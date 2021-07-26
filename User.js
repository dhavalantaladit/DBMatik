import React, {useState} from 'react';

import {
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Picker
} from 'react-native';

import SelectMultiple from 'react-native-select-multiple'
import CheckBox from '@react-native-community/checkbox'

const UserModal = ({modalVisible, setModalVisible}) => {
  const options = ['main', 'operator', 'process engineer', 'service'];
  const [selected, setSelected] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Create user</Text>
              </View>
              <TouchableOpacity style={{alignSelf: 'flex-end', padding: 10, margin: 10, borderRadius: 5, borderWidth: 1, backgroundColor: '#dbdbdb', borderColor: '#dbdbdb'}}>
                <Text style={{fontSize: 17}}>👤 Create user</Text>
              </TouchableOpacity>
              <View style={{margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 20, color: '#363636'}}>User</Text>
                <TextInput style={{backgroundColor: 'white', margin: 10, borderRadius: 10}}/>
              </View>
              <View style={{margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 20, color: '#363636'}}>Password</Text>
                <TextInput style={{backgroundColor: 'white', margin: 10, borderRadius: 10}}/>
              </View>
              <View style={{margin: 10, marginTop: 0}}>
                <Text style={{fontSize: 20, color: '#363636'}}>Access level</Text>
                <Picker
                  style={{ height: 50, width: '70%'}}
                  mode="dropdown"
                >
                  <Picker.Item label="Process engineer" value="ProcessEngineer" />
                </Picker>
              </View>
            </View>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Product administration</Text>
              </View>
              <View style={{flexDirection: 'row', margin: 20, marginBottom: 0, alignItems: 'center'}}>
                <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5, width: '75%'}}/>
                <View>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                  <Text style={{fontSize: 15, color: '#363636'}}>Access Level</Text>
                </View>
              </View>
              <View style={{margin: 20, marginBottom: 0, flexDirection: 'row'}}>
                <SelectMultiple
                  items={options}
                  selectedItems={selected}
                  onSelectionsChange={setSelected} 
                />
                <View>
                <Picker
                  style={{ height: 50, width: '100%'}}
                  mode="dropdown"
                  >
                  <Picker.Item label="Maintenence" value="Maintenence" />
                </Picker>
                <TouchableOpacity style={{alignSelf: 'flex-end', padding: 10, margin: 10, borderRadius: 5, borderWidth: 1, backgroundColor: '#dbdbdb', borderColor: '#dbdbdb'}}>
                  <Text style={{fontSize: 17, color:'#363636'}}>👤 Change access level</Text>
                </TouchableOpacity>
                <View style={{marginBottom: 0}}>
                  <Text style={{fontSize: 15, color: '#363636'}}>
                    Password
                  </Text>
                  <TextInput placeholder="112129003021" style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
                <View style={{marginBottom: 0}}>
                  <Text style={{fontSize: 15, color: '#363636'}}>
                    New password
                  </Text>
                  <TextInput placeholder="80-360-005" style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
                <TouchableOpacity style={{alignSelf: 'flex-end', padding: 10, margin: 10, borderRadius: 5, borderWidth: 1, backgroundColor: '#dbdbdb', borderColor: '#dbdbdb'}}>
                  <Text style={{fontSize: 17, color:'#363636'}}>👤 Change password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10, margin: 10, marginLeft: 25, borderRadius: 5, borderWidth: 1, backgroundColor: '#dbdbdb', borderColor: '#dbdbdb'}}>
                  <Text style={{fontSize: 17, color:'#363636'}}>👤 Delete</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
  )
}
export default UserModal;