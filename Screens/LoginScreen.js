import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import image from '../assets/logo.png';
import Btn from '../component/Button';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useState, useContext } from 'react';
import { SignInContext } from '../Context/authContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AnimatedLoader from 'react-native-animated-loader';
import { auth } from '../firebase';
import { ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [visible, setVisible] = useState(false);
  const { dispatchSignedIn } = useContext(SignInContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async () => {
    setVisible(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: { userToken: 'signed-in' },
        });
        setVisible(false);
        navigation.navigate('MainScreen', {
          email: email,
          password: password,
        });
      }
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  };

  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        source={require('../global/loader.json')}
        speed={1}
      >
        <Text>Loading...</Text>
      </AnimatedLoader>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <View style={{ alignItems: 'center' }}>
            <Image style={styles.logo} source={image} />
          </View>
          <Text style={{ fontSize: 15, marginBottom: 5 }}>
            Acciona Account Users (eg.@acciona, @colemanrail etc.) Sign in with
            your corporate ID
          </Text>
          <Btn
            text="AccionaCorporateLogin"
            textStyle={styles.textStyle}
            onPress={onSubmit}
            style={styles.btn}
          />
          <View style={styles.divider}>
            <Divider style={{ width: '43%' }} />
            <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 15 }}>
              OR
            </Text>
            <Divider style={{ width: '43%' }} />
          </View>
          <Text
            style={{
              fontSize: 15,
              marginBottom: 5,
              textAlign: 'left',
            }}
          >
            All Others Users {'>'} Use the Login form below
          </Text>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text>Email</Text>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                placeholder="  name@host.com"
              />
            </View>
            <View style={styles.input}>
              <Text>Password</Text>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                placeholder="  Password"
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              marginTop: 10,
            }}
          >
            <Text style={{ textAlign: 'right' }}>Forgot Your Password?</Text>
          </View>
          <Btn
            text="Login"
            textStyle={styles.textStyle}
            onPress={onSubmit}
            style={styles.btnLogin}
          />
          <View style={styles.divider}>
            <Divider style={{ width: '43%' }} />
            <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 15 }}>
              OR
            </Text>
            <Divider style={{ width: '43%' }} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={{
                color: '#38044B',
                fontWeight: 'bold',
                fontSize: 17,
              }}
            >
              Don't have an account? Create now!
            </Text>
          </View>
          <View style={styles.textFooter}>
            <Text style={styles.txt}>
              Forgot your password or having trouble signing in?
            </Text>
            <Text style={styles.txt}>
              Contact the Service Desk on:{' '}
              <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>
                (03) 9624 4236
              </Text>
            </Text>
            <Text style={styles.txt}>
              Raise an incident via{' '}
              <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>
                Service Now Portal
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignContent: 'center',
  },
  content: {
    width: '90%',
    margin: '5%',
  },
  textStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  },
  btn: {
    backgroundColor: '#EE0000',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  btnLogin: {
    backgroundColor: '#38044B',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  divider: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  form: {
    width: '100%',
  },
  input: {
    padding: 5,
  },
  textFooter: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    textAlign: 'center',
    margin: 2,
    fontSize: 15,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
