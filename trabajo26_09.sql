-- primer join
select * from clients left join accounts on clients.id = accounts.client_id;

-- segundo join
select account_no,client_id,name from accounts left join account_types using (id);

-- tercer join
select amount,name from transactions left join transactions_types on transactions.transaction_type = transactions_types.id;
-- select * from transactions left join transactions_types on transactions.transaction_type = transactions_types.id;

-- cuarto join
select * from transaction_type left join transactions on transactions_types.id = transactions.transaction_type;

-- quinto ejercicio, VIEWs
-- primer view
create view v_clients_accounts as select clients.id, clients.first_name, clients.last_name, clients.email, accounts.account_no, accounts.balance from accounts,clients where accounts.client_id = clients.id;

-- segundo view
create view v_accounts_types as select accounts.account_no,accounts.client_id,account_types."name" from accounts,account_types where accounts."type"  = account_types.id;

-- tercer view
create view v_transactions_detail as select transactions.id,transactions.amount,transactions_types.name from transactions_types,transactions where transactions.transaction_type = transactions_types.id;

-- cuarto view
create view v_transations_types_detail as select transactions.id,transactions.amount,transactions_types.name from transactions_types,transactions where transactions.transaction_type = transactions_types.id;
