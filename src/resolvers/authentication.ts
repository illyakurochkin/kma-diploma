import {OAuth2Client} from 'google-auth-library';
import express from 'express';

const CLIENT_ID = process.env.CLIENT_ID || '407408718192.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const verify = async (token: string): Promise<string | null> => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID
  });

  const payload = ticket.getPayload()!;
  return payload['email'] || null;
};

export default async (
  req: express.Request, res: express.Response, next: express.NextFunction
): Promise<void> => {
  const token = req.headers.authorization;

  if(!token) {
    next();
    return;
  }

  const email = await verify(token as string);
  if(!email) {
    res.status(401).send({message: 'Invalid authentication token'});
    return;
  }

  Object.assign(req, {locals: {email}});
  next();
}
