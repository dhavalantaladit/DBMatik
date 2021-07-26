/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import DashboardModal from './Dashboard';
import SetupModal from './Setup';
import ProductModal from './Product';
import LoginModal from './Login';
import UserModal from './User';
import LogModal from './Log';

const App = () => {
  const [dashboardModalVisible, setDashboardModalVisible] = useState(false);
  const [setupModalVisible, setSetupModalVisible] = useState(false);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [logModalVisible, setLogModalVisible] = useState(false);
  return (
    <View style={{flex: 1 }}>
      <StatusBar backgroundColor="black" />
      <View style={{elevation: 5,width: '100%', padding: 10, backgroundColor: 'black'}}>
          <TouchableOpacity>
            <Text style={{fontSize: 25, color: 'white', alignSelf: 'flex-end', marginRight: 10}}>☰</Text>
          </TouchableOpacity>
      </View>
        <View
          style={{ flex:1, padding: '5%', marginTop: '10%', marginBottom: '20%'
          }}>
            <View style={{elevation: 5, padding: 15, borderRadius: 5, flex:1, justifyContent: 'space-around'}}>
              <TouchableOpacity onPress={() => setDashboardModalVisible(true)} style={{padding: 10, margin: 5, borderRadius: 5, borderColor: '#dbdbdb', borderWidth:1, alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>📈 Dashboard 2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSetupModalVisible(true)} style={{padding: 10, margin: 5, borderRadius: 5, borderColor: '#dbdbdb', borderWidth:1, alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>🛠 Setup</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setProductModalVisible(true)} style={{padding: 10, margin: 5, borderRadius: 5, borderColor: '#dbdbdb', borderWidth:1, alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>🏷 Product</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLoginModalVisible(true)} style={{padding: 10, margin: 5, borderRadius: 5, borderColor: '#dbdbdb', borderWidth:1, alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>➡ Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setUserModalVisible(true)} style={{padding: 10, margin: 5, borderRadius: 5, borderColor: '#dbdbdb', borderWidth:1, alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>👤 User</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLogModalVisible(true)} style={{padding: 10, margin: 5, borderRadius: 5, borderColor: '#dbdbdb', borderWidth:1, alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>📝 Log</Text>
              </TouchableOpacity>
            </View>
        <View style={{margin: 20}}>
          <Text style={{color: '#363636', fontSize: 17}}>About        |       Help</Text>
        </View>
        </View>
        <DashboardModal modalVisible={dashboardModalVisible} setModalVisible={setDashboardModalVisible}/>
        <SetupModal modalVisible={setupModalVisible} setModalVisible={setSetupModalVisible}/>
        <ProductModal modalVisible={productModalVisible} setModalVisible={setProductModalVisible}/>
        <LoginModal modalVisible={loginModalVisible} setModalVisible={setLoginModalVisible}/>
        <UserModal modalVisible={userModalVisible} setModalVisible={setUserModalVisible}/>
        <LogModal modalVisible={logModalVisible} setModalVisible={setLogModalVisible}/>
    </View>
  );
};

export default App;
