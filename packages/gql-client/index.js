"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserLazyQuery = exports.useUserQuery = exports.UserDocument = exports.useCreateNewUserMutation = exports.CreateNewUserDocument = exports.UserDistinctFieldEnum = exports.SortOrder = exports.QueryMode = exports.ProjectDistinctFieldEnum = void 0;
const client_1 = require("@apollo/client");
const Apollo = __importStar(require("@apollo/client"));
var ProjectDistinctFieldEnum;
(function (ProjectDistinctFieldEnum) {
    ProjectDistinctFieldEnum["CreatedAt"] = "createdAt";
    ProjectDistinctFieldEnum["Id"] = "id";
    ProjectDistinctFieldEnum["Name"] = "name";
    ProjectDistinctFieldEnum["OwnerId"] = "ownerId";
    ProjectDistinctFieldEnum["UpdatedAt"] = "updatedAt";
})(ProjectDistinctFieldEnum = exports.ProjectDistinctFieldEnum || (exports.ProjectDistinctFieldEnum = {}));
var QueryMode;
(function (QueryMode) {
    QueryMode["Default"] = "default";
    QueryMode["Insensitive"] = "insensitive";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "asc";
    SortOrder["Desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var UserDistinctFieldEnum;
(function (UserDistinctFieldEnum) {
    UserDistinctFieldEnum["Avatar"] = "avatar";
    UserDistinctFieldEnum["CreatedAt"] = "createdAt";
    UserDistinctFieldEnum["Email"] = "email";
    UserDistinctFieldEnum["Id"] = "id";
    UserDistinctFieldEnum["LastOnline"] = "lastOnline";
    UserDistinctFieldEnum["Name"] = "name";
    UserDistinctFieldEnum["Password"] = "password";
    UserDistinctFieldEnum["SocialLoginToken"] = "socialLoginToken";
    UserDistinctFieldEnum["SocialLoginType"] = "socialLoginType";
    UserDistinctFieldEnum["Tier"] = "tier";
})(UserDistinctFieldEnum = exports.UserDistinctFieldEnum || (exports.UserDistinctFieldEnum = {}));
exports.CreateNewUserDocument = client_1.gql `
  mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
    createLocalUser(data: { name: $name, email: $email, password: $password }) {
      id
    }
  }
`;
function useCreateNewUserMutation(baseOptions) {
    return Apollo.useMutation(exports.CreateNewUserDocument, baseOptions);
}
exports.useCreateNewUserMutation = useCreateNewUserMutation;
exports.UserDocument = client_1.gql `
  query User($id: Int!) {
    user(where: { id: $id }) {
      id
      name
      lastOnline
      email
      avatar
    }
  }
`;
function useUserQuery(baseOptions) {
    return Apollo.useQuery(exports.UserDocument, baseOptions);
}
exports.useUserQuery = useUserQuery;
function useUserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.UserDocument, baseOptions);
}
exports.useUserLazyQuery = useUserLazyQuery;
//# sourceMappingURL=index.js.map