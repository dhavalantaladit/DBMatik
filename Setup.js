import React from 'react';

import {
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const SetupModal = ({modalVisible, setModalVisible}) => {
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
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Clear Buffer</Text>
              </View>
              <View style={{margin: 20, marginBottom: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={{color: '#363636', fontSize: 15, marginBottom: 5}}>Buffer 2</Text>
                    <TouchableOpacity style={{padding: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white'}}>
                      <Text style={{fontSize: 15, color: '#363636'}}>Clear</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={{color: '#363636', fontSize: 15, marginBottom: 5}}>Buffer 3</Text>
                    <TouchableOpacity style={{padding: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white'}}>
                      <Text style={{fontSize: 15, color: '#363636'}}>Clear</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Open Clamps</Text>
              </View>
              <View style={{margin: 20, marginBottom: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={{color: '#363636', fontSize: 15, marginBottom: 5}}>1st transport Clamps</Text>
                    <TouchableOpacity style={{padding: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white'}}>
                      <Text style={{fontSize: 15, color: '#363636'}}>Open</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{alignItems: 'flex-start'}}>
                    <Text style={{color: '#363636', fontSize: 15, marginBottom: 5}}>2nd transport Clamps</Text>
                    <TouchableOpacity style={{padding: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 5, borderWidth: 1, alignItems: 'center', alignSelf: 'flex-end', borderColor: 'white'}}>
                      <Text style={{fontSize: 15, color: '#363636'}}>Open</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Open security doors</Text>
              </View>
              <View style={{margin: 20,}}>
                <TouchableOpacity style={{padding: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white'}}>
                  <Text style={{fontSize: 15, color: '#363636'}}>Open</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Printer signal</Text>
              </View>
              <View style={{margin: 20,}}>
                <TouchableOpacity style={{padding: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white'}}>
                  <Text style={{fontSize: 15, color: '#363636'}}>Open</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
              <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Vaccum fan speed</Text>
              </View>
              <View style={{margin: 20,}}>
              <ProgressBar
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.2}
              />
                <TouchableOpacity style={{marginTop: 10,padding: 7, paddingLeft: 20, paddingRight: 20, borderRadius: 5, borderWidth: 1, alignItems: 'center', borderColor: 'white'}}>
                  <Text style={{fontSize: 15, color: '#363636'}}>On</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    )
}
export default SetupModal;