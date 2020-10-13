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
exports.useUserLazyQuery = exports.useUserQuery = exports.UserDocument = exports.useCreateNewUserMutation = exports.CreateNewUserDocument = exports.useCreateEarlyAccessCodeMutation = exports.CreateEarlyAccessCodeDocument = exports.Userrole = exports.UserDistinctFieldEnum = exports.SortOrder = exports.QueryMode = exports.ProjectDistinctFieldEnum = exports.EarlyAccessCodesDistinctFieldEnum = void 0;
const client_1 = require("@apollo/client");
const Apollo = __importStar(require("@apollo/client"));
var EarlyAccessCodesDistinctFieldEnum;
(function (EarlyAccessCodesDistinctFieldEnum) {
    EarlyAccessCodesDistinctFieldEnum["Code"] = "code";
    EarlyAccessCodesDistinctFieldEnum["Id"] = "id";
    EarlyAccessCodesDistinctFieldEnum["IsUsed"] = "isUsed";
})(EarlyAccessCodesDistinctFieldEnum = exports.EarlyAccessCodesDistinctFieldEnum || (exports.EarlyAccessCodesDistinctFieldEnum = {}));
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
    UserDistinctFieldEnum["Role"] = "role";
    UserDistinctFieldEnum["SocialLoginToken"] = "socialLoginToken";
    UserDistinctFieldEnum["SocialLoginType"] = "socialLoginType";
    UserDistinctFieldEnum["Tier"] = "tier";
})(UserDistinctFieldEnum = exports.UserDistinctFieldEnum || (exports.UserDistinctFieldEnum = {}));
var Userrole;
(function (Userrole) {
    Userrole["RoleAdmin"] = "ROLE_ADMIN";
    Userrole["RoleUser"] = "ROLE_USER";
})(Userrole = exports.Userrole || (exports.Userrole = {}));
exports.CreateEarlyAccessCodeDocument = client_1.gql `
  mutation CreateEarlyAccessCode($code: String!) {
    createEarlyAccessCodes(data: { code: $code, isUsed: false }) {
      code
    }
  }
`;
function useCreateEarlyAccessCodeMutation(baseOptions) {
    return Apollo.useMutation(exports.CreateEarlyAccessCodeDocument, baseOptions);
}
exports.useCreateEarlyAccessCodeMutation = useCreateEarlyAccessCodeMutation;
exports.CreateNewUserDocument = client_1.gql `
  mutation CreateNewUser($name: String!, $email: String!, $password: String!, $accessCode: String!) {
    createLocalUser(data: { name: $name, email: $email, password: $password, accessCode: $accessCode }) {
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