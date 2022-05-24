import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button, Form, Input } from "antd";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB186atl4MDh6vHVq3Bb7HgFZ2EpBJvSW0",
  authDomain: "my-first-firestore-af.firebaseapp.com",
  projectId: "my-first-firestore-af",
  storageBucket: "my-first-firestore-af.appspot.com",
  messagingSenderId: "869713285320",
  appId: "1:869713285320:web:6fd4249582421a7e2615fd",
};

export default function Login() {
  const handleLogin = ({ email, password }) => {
    const app = initializeApp(firebaseConfig); // connect to firebase
    const auth = getAuth(app); // connect to firebase/auth
    // login with Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res.user))
      .catch(console.error);
  };
  const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log(res.user))
      .catch(console.error);
  };
  return (
    <section style={{ padding: "2em" }}>
      <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Form.Item>
      </Form>
    </section>
  );
}
