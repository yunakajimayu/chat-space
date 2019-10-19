## Chat-Space DB設計

## users_テーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false|
 |email|string|null: false|
 |password|string|null: false|

 ###  Assciation
 - belongs_to :group
 - has_many :messages

## groups_テーブル
 |Column|Type|Options|
 |------|----|-------|
 |user_id|integer|null: false, foreign_key: ture|
 |message_id|integer|null: false, foreign_key: ture|

### Association
- has_many :users
- has_many :messages

## messages_テーブル
 |Column|Type|Options|
 |------|----|-------|
 |body|text|null: false|
 |image|string|null: false|
 |group_id|integer|null: false, foreign_key: ture|
 |user_id|integer|null: false, foreign_key: ture|

### Association
- belong_to :user

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
