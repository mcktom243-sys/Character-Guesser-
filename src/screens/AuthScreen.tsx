import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { loginWithMeta, signUpWithEmail, signInWithEmail } from './authService'; // Assume you have an authService to handle auth

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSubmit = async () => {
        setError('');
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }
        
        try {
            if (isSignUp) {
                await signUpWithEmail(email, password);
            } else {
                await signInWithEmail(email, password);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleMetaLogin = async () => {
        try {
            await loginWithMeta();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <View>
            <Text>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                required
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                required
            />
            <Button onPress={handleSubmit} title={isSignUp ? 'Sign Up' : 'Sign In'} />
            <Button onPress={handleMetaLogin} title="Login with Meta" />
            <Button onPress={() => setIsSignUp(!isSignUp)} title={`Switch to ${isSignUp ? 'Sign In' : 'Sign Up'}`} />
        </View>
    );
};

export default AuthScreen;