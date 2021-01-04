import React, { createContext, useContext } from 'react';

export const FunctionContext = createContext();

const PostComment = (formData, orders, fnorder, fn) => {
    return (
        fetch('/api/user_comment_post', {
            method: 'post',
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.status === 500) {
                    fn(result.error);
                } else {
                    var neworder = result.data;

                    var index = orders.findIndex(
                        (oldorder) => oldorder._id === neworder._id
                    );

                    orders.splice(index, 1, neworder);
                    fnorder(orders);
                    fn([]);
                }
                return result;
            })
            // .then((res) => fno(res))
            .catch((err) => new Error(err))
    );
};
const GetAllOrder = (parmsuser, fno) => {
    return fetch('/api/user_order_post', {
        method: 'post',
        body: JSON.stringify({
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then((result) => result.data)
        .then((res) => fno(res))
        .catch(new Error());
};
const checkOut = (parmsuser, fnins, fnlen, fnc, fnt) => {
    return fetch('/api/user_chckout_post', {
        method: 'post',
        body: JSON.stringify({
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            fnins(result.data);

            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.quantity;
            var inslen = result.data ? result.data.reduce(reducer, 0) : 0;
            fnlen(inslen);

            var { itemCount, total } = sumItems(result.data);
            fnc(itemCount);
            fnt(total);
        })
        .catch(new Error());
};

const sumItems = (instances) => {
    var checkedInstances = instances.filter(
        (instance) => instance.check === true
    );

    let itemCount = checkedInstances.reduce(
        (total, checkedInstance) => total + checkedInstance.quantity,
        0
    );
    let total = checkedInstances
        .reduce(
            (total, checkedInstance) =>
                total + checkedInstance.item.price * checkedInstance.quantity,
            0
        )
        .toFixed(2);

    return { itemCount, total };
};
const ChgChk = (
    parmscheck,
    parmsid,
    parmsuser,
    ins_cart,
    fnins,
    fnlen,
    fnc,
    fnt
) => {
    return fetch('/api/user_chkchg_post', {
        method: 'post',
        body: JSON.stringify({
            check: parmscheck,
            instanceid: parmsid,
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            var newins = result.data;
            var index = ins_cart.findIndex(
                (oldins) => oldins._id === newins._id
            );

            ins_cart.splice(index, 1, newins);

            fnins(ins_cart);

            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.quantity;
            var inslen = ins_cart ? ins_cart.reduce(reducer, 0) : 0;
            fnlen(inslen);
            var { itemCount, total } = sumItems(ins_cart);
            fnc(itemCount);
            fnt(total);
        })
        .catch(new Error());
};
const DeleteIns = (parmsid, parmsuser, ins_cart, fnins, fnlen, fnc, fnt) => {
    return fetch('/api/user_deleteins_post', {
        method: 'post',
        body: JSON.stringify({
            instanceid: parmsid,
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then(() => {
            var index = ins_cart.findIndex((oldins) => oldins._id === parmsid);

            ins_cart.splice(index, 1);

            fnins(ins_cart);

            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.quantity;
            var inslen = ins_cart ? ins_cart.reduce(reducer, 0) : 0;
            fnlen(inslen);

            var { itemCount, total } = sumItems(ins_cart);
            fnc(itemCount);
            fnt(total);
        })
        .catch(new Error());
};

const ChangeAddCart = (
    parmscount,
    parmsid,
    parmsuser,
    ins_cart,
    fnins,
    fnlen,
    fnc,
    fnt
) => {
    return fetch('/api/user_changeAddcart_post', {
        method: 'post',
        body: JSON.stringify({
            count: parmscount,
            instanceid: parmsid,
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            var newins = result.data;

            var index = ins_cart.findIndex(
                (oldins) => oldins._id === newins._id
            );

            ins_cart.splice(index, 1, newins);

            fnins(ins_cart);

            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.quantity;
            var inslen = ins_cart.reduce(reducer, 0);
            fnlen(inslen);

            var { itemCount, total } = sumItems(ins_cart);
            fnc(itemCount);
            fnt(total);
        })
        .catch(new Error());
};

const ChangeToCart = (
    parmscount,
    parmsid,
    parmsuser,
    ins_cart,
    fnins,
    fnlen,
    fnc,
    fnt
) => {
    return fetch('/api/user_changetocart_post', {
        method: 'post',
        body: JSON.stringify({
            count: parmscount,
            instanceid: parmsid,
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            // result is newins
            var newins = result.data;
            var index = ins_cart.findIndex(
                (oldins) => oldins._id === newins._id
            );
            ins_cart.splice(index, 1, newins);
            fnins(ins_cart);

            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.quantity;
            var inslen = ins_cart.reduce(reducer, 0);
            fnlen(inslen);

            var { itemCount, total } = sumItems(ins_cart);
            fnc(itemCount);
            fnt(total);
        })
        .catch(new Error());
};
const checkdb = () => {
    return fetch('/api/del_carts_all')
        .then(console.log('db operation complete'))
        .catch((err) => new Error(err));
};
const GetAllCarts = (parmsuser, fnins, fnlen, fnc, fnt) => {
    //if (!parmsuser) return Promise.reject('no user');
    return fetch('/api/user_getallcart_post', {
        method: 'post',
        body: JSON.stringify({
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            var newins_cart = result.data;
            fnins(newins_cart);

            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.quantity;
            var inslen = newins_cart ? newins_cart.reduce(reducer, 0) : 0;

            fnlen(inslen);

            var { itemCount, total } = sumItems(newins_cart);
            fnc(itemCount);
            fnt(total);
        })
        .catch(new Error());
};

const AddToCart = (parmscount, parmsid, parmsuser, fnins, fnlen, fnc, fnt) => {
    return fetch('/api/user_addtocart_post', {
        method: 'post',
        body: JSON.stringify({
            count: parmscount,
            itemid: parmsid,
            user: parmsuser,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            var newins_cart = result.data;
            // now the result is new iteminstance

            fnins(newins_cart);

            const reducer = (accumulator, currentValue) =>
                accumulator + currentValue.quantity;
            var inslen = newins_cart.reduce(reducer, 0);
            fnlen(inslen);

            var { itemCount, total } = sumItems(newins_cart);
            fnc(itemCount);
            fnt(total);
        })
        .catch(new Error());
};

const FunctionContextProvider = ({ children }) => {
    return (
        <FunctionContext.Provider
            value={{
                GetAllCarts,
                AddToCart,
                checkdb,
                ChangeToCart,
                ChangeAddCart,
                DeleteIns,
                ChgChk,
                checkOut,
                GetAllOrder,
                PostComment,
            }}
        >
            {children}
        </FunctionContext.Provider>
    );
};

export const usefunctions = () => useContext(FunctionContext);
export default FunctionContextProvider;
