
/**
 * deps
 */

var _ = require('lodash')
  , express = require('express');

/**
 * Base auth class. Will eventually be based on
 * in memory store for dev purposes. 
 */

function oAuth2o(adapter) {
  console.log('....  initizalizing....');
  console.log(adapter);
  this.adapter = adapter;
  if (_.isObject(adapter)) _.extend(this, adapter);
}

/**
 * @param appId - req.params.appId
 * @uri /auth/code
 */

oAuth2o.prototype.createGrant = function(req, res, next) {
  console.log('oauth2o2 createGrant');
  console.log('oauth2o2 createGrant');
  console.log('oauth2o2 createGrant');
  console.log('oauth2o2 createGrant');
  // get auth code
  console.log(this.adapter);
};

/**
 * @param appId
 * @param encryptionCode
 * @uri /auth/token
 */

oAuth2o.prototype.createToken = function(req, res, next) {
  // decrypt encrypted code with app.secretKey
  // if success, generate and return token
};

/**
 * @param token - header/querystring
 */

oAuth2o.prototype.authorize = function(req, res, next) {
  // grabs the token from the url, if the token 
  // is valid then `next()`
};

module.exports = oAuth2o;