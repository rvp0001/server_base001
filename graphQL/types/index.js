/**
 * @author 
 */

import { mergeTypes } from "merge-graphql-schemas";

// Importing types

import documentsTypes from './documentsTypes';

import docHeaderTypes from './docHeaderTypes';
import docDetailTypes from './docDetailTypes';

import user_type from './user_type';
import docType from './docType';
import stockType from './stockType';
import recommendationType from './recommendationType'

// Merge all of the types together
const types = [
              
          
                documentsTypes,
                docHeaderTypes,
                docDetailTypes,
                user_type,
                docType,
                stockType,
                recommendationType
              ];
  
// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
const typeDefs =  mergeTypes(types, { all: true });

export default typeDefs;