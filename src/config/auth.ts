export default {
  hashSaltRounds: Number(process.env.HASH_SALT_ROUNDS) || 10,
  jwt: {
    duration: process.env.JWT_DURATION || '1h',
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
  },
};
