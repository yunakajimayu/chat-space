## Chat-Space DB設計

## users_テーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false, index true|
 |email|string|null: false|
 |password|string|null: false|

###  Assciation
 - has_many :messages 
 - has_many :groups, through: :groups_users
 - has_many :groups_users

## groups_テーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false, foreign_key: ture|
 
### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users

## messages_テーブル
 |Column|Type|Options|
 |------|----|-------|
 |body|text|
 |image|string|
 |group_id|references|null: false, foreign_key: ture|
 |user_id|references|null: false, foreign_key: ture|

### Association
 - belong_to :user
 - belong_to :group

## groups_usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |user_id|references|null: false, foreign_key: true|
 |group_id|references|null: false, foreign_key: true|

### Association
 - belongs_to :group
 - belongs_to :user
